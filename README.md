# Mecha Proving Ground — Android APK build package

This package wraps the supplied single-file Three.js game in Capacitor. It keeps the original game code and uses a local copy of Three.js so the renderer does not depend on the Three.js CDN at runtime.

## Build in the cloud (phone-friendly route)

1. Create a GitHub repository named `mecha-proving-ground`.
2. Upload the contents of this ZIP to the repository root (not the ZIP file itself).
3. Open the repository's **Actions** tab.
4. If prompted, enable GitHub Actions.
5. Open **Build Android APK** and tap **Run workflow** (or push to `main`).
6. Wait for the workflow to finish successfully.
7. Open the completed workflow run, find **Artifacts**, and download `mecha-proving-ground-debug-apk`.
8. Extract the downloaded artifact ZIP and install `app-debug.apk` on your Android phone. You may need to allow installation from your browser or file manager.

## Important notes

- This produces a debug APK for testing and direct installation, not a Play Store release.
- The APK bundles the game and Three.js. The supplied game has no separate model/audio asset folder in this upload.
- The original game references Google Fonts. Those external font imports were removed so the app can use its system fallback fonts offline.
- This package does not yet alter the original game's gameplay or UI. The supplied HTML currently contains CSS rules that hide the on-screen joystick/action buttons; if you want touch controls visible, that should be corrected and tested as a separate game change.
- A successful build still needs a GitHub account and a successful GitHub Actions run. I cannot sign in to your account or trigger the build from this chat.
- For a signed release APK / Play Store upload, a release signing key and additional configuration are required. Do not share your private signing key or passwords in chat.

## Project structure

- `public/index.html` — your original game, with the Three.js script path made local
- `package.json` — Capacitor, Three.js and Vite dependencies
- `capacitor.config.json` — Android app identity and web output folder
- `.github/workflows/android.yml` — cloud APK build workflow
