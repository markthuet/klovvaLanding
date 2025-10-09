# Firebase Setup Instructions for Klovva Landing Page

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `klovva-landing` (or your preferred name)
4. Click **Continue**
5. Disable Google Analytics (optional - you can enable it if you want)
6. Click **Create project**
7. Wait for project to be created, then click **Continue**

## Step 2: Register Your Web App

1. In your Firebase project dashboard, click the **Web icon** (`</>`) to add a web app
2. Enter app nickname: `Klovva Website` (or your preferred name)
3. **Do NOT** check "Also set up Firebase Hosting" (you're using GitHub Pages)
4. Click **Register app**

## Step 3: Get Your Firebase Configuration

1. You'll see a code snippet with your Firebase config
2. Copy the **firebaseConfig** object (the part that looks like this):

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "klovva-landing.firebaseapp.com",
  projectId: "klovva-landing",
  storageBucket: "klovva-landing.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

3. Open the file `firebase-config.js` in your project
4. Replace the placeholder values with your actual Firebase config values
5. Save the file

## Step 4: Set Up Firestore Database

1. In the Firebase Console, click **Firestore Database** in the left sidebar
2. Click **Create database**
3. Choose **Start in test mode** (we'll secure it later)
4. Click **Next**
5. Choose your Cloud Firestore location (choose closest to your users, e.g., `us-central` for US)
6. Click **Enable**

## Step 5: Configure Security Rules (Important!)

1. In Firestore Database, click the **Rules** tab
2. Replace the default rules with these rules to allow form submissions:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to demo-requests collection
    // But only you (authenticated) can read them
    match /demo-requests/{document=**} {
      allow write: if true;  // Anyone can submit forms
      allow read: if false;  // No one can read (you'll use Firebase Console)
    }
  }
}
```

3. Click **Publish**

## Step 6: Test Your Form

1. Open your website locally or on your live site
2. Go to the "Contact Sales" form (`demo-request.html`)
3. Fill out the form and click **Send Request**
4. You should see the success message
5. Go to Firebase Console > Firestore Database > Data tab
6. You should see a new collection called `demo-requests` with your submission

## Step 7: View Form Submissions

**In Firebase Console:**
1. Go to **Firestore Database** > **Data** tab
2. Click on the `demo-requests` collection
3. You'll see all form submissions with timestamps

**Export Data:**
- Click the three dots menu (⋮) next to any document
- Select **Export document** to download as JSON

## Optional: Set Up Email Notifications

If you want to receive email notifications when someone submits the form:

1. Set up Firebase Cloud Functions (requires upgrading to Blaze/Pay-as-you-go plan - still free for low traffic)
2. Or use a service like [Zapier](https://zapier.com) to connect Firestore to your email
3. Or manually check the Firebase Console daily for new submissions

## Security Best Practices

**After testing, update your Firestore rules to be more restrictive:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /demo-requests/{document=**} {
      // Rate limiting: only allow writes if the request contains required fields
      allow write: if request.resource.data.keys().hasAll(['firstName', 'lastName', 'businessEmail', 'companyName'])
                   && request.resource.data.businessEmail is string
                   && request.resource.data.businessEmail.matches('.*@.*\\..*');
      allow read: if false;
    }
  }
}
```

## Troubleshooting

**Error: "Firebase is not defined"**
- Make sure `firebase-config.js` is loaded after the Firebase SDK scripts in `demo-request.html`
- Check that you've replaced the placeholder values in `firebase-config.js`

**Error: "Missing or insufficient permissions"**
- Check your Firestore security rules
- Make sure you're in "test mode" or have the correct write permissions

**Form submission doesn't save**
- Open browser console (F12) and check for errors
- Verify your Firebase config values are correct
- Make sure Firestore is enabled in Firebase Console

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs/firestore)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
