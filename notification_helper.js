function requestNotificationPermission() {
    return Notification.requestPermission().then(permission => {
        return permission === 'granted';
    });
}

function showNotification(title, options) {
    if (Notification.permission === 'granted') {
        new Notification(title, options);
    } else {
        console.log('Notification permission not granted');
    }
}

function closeNotification(tag) {
    console.log(`Notification with tag ${tag} would be closed if supported`);
}