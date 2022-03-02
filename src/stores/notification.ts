import { defineStore } from 'pinia';
import { IS_STORAGE_AVAILABLE } from '@/setup/globals';
import i18n from '@/setup/i18n';

export interface INotificationItem {
  id: number;
  type?: string;
  message?: string;
  expire?: boolean;
  selector?: string | null;
  redirectUrl?: string;
}

export interface INotificationState {

  /**
   * Holds the notification items.
   */
  notifications: INotificationItem[];
}

interface IInitialStoreDate {

  /**
   * Holds the initial notification items.
   */
  notifications?: INotificationItem[];
}

/**
 * Default unknown error notification template.
 */
const NOTIFICATION_UNKNOWN_ERROR: INotificationItem = {
  id: 0,
  type: 'error',
  message: i18n.global.t('globalMessages.unknownApiError'),
};

const storeName: string = 'notification';

let currentId: number = 1;

/**
 * Handles notification redirects.
 */
function handleRedirect(notification: INotificationItem): void {
  const { redirectUrl } = notification || {};

  if (redirectUrl && IS_STORAGE_AVAILABLE) {
    localStorage.setItem('notification', JSON.stringify({
      ...notification,
      redirectUrl: null,
    }));

    window.location.href = redirectUrl;
  }
}

/**
 * Adds a unique ID to a notification.
 */
function addId(notification: INotificationItem): INotificationItem {
  currentId += 1;

  return {
    ...notification,
    id: currentId
  };
}

export default defineStore(storeName, {
  state: (): INotificationState => {
    const initialData: IInitialStoreDate = window.initialData?.[storeName] || {};

    const state: INotificationState = {
      notifications: [],
    };

    if (Array.isArray(initialData.notifications) && initialData.notifications.length) {
      state.notifications = initialData.notifications.map((notification) => {
        handleRedirect(notification);

        return addId(notification);
      });

      delete initialData.notifications;
    }

    return state;
  },
  getters: {
    /**
     * Gets the current list of notifications.
     */
    getNotifications(state): INotificationItem[] {
      return state.notifications;
    },
  },
  actions: {
    /**
     * Shows the given notification and returns its instance.
     */
    showNotification(notification: INotificationItem): INotificationItem {
      handleRedirect(notification);

      const mappedNotification = addId(notification);

      this.notifications.push(mappedNotification);

      return mappedNotification;
    },

    /**
     * Removes a notification.
     */
    popNotification(id: number): void {
      this.notifications = this.notifications.filter(notification => notification.id !== id);
    },

    /**
     * Adds an "unknown error" to the notification stack.
     */
    showUnknownError() {
      this.showNotification(NOTIFICATION_UNKNOWN_ERROR);
    }
  },
});
