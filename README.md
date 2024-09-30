# Preview of POC Image Preview



https://github.com/user-attachments/assets/c27b8424-fa9a-44ed-b4d1-b7085a4c3a98



### **Features of POC Image Preview**

1. **Interactive Image Comparison**:
   - Allows users to compare two images side-by-side with a draggable slider. The swipe gesture adjusts how much of each image is visible in real-time.

2. **Gesture Handling**:
   - Uses `PanGestureHandler` to recognize swipes, making it user-friendly and interactive for touch-based devices like smartphones.

3. **Smooth Animations**:
   - The `useSharedValue` and `useAnimatedStyle` hooks from `react-native-reanimated` create fluid transitions between images as the slider is moved.

4. **Customizable Layout**:
   - The app can be easily modified to accommodate different image dimensions, layouts, and styles.

5. **Cross-Platform**:
   - Designed using React Native, allowing the app to work seamlessly on both iOS and Android devices.

---

### **Detailed Use Cases**

1. **Photo Editing/Before-After Previews**:
   - Users can compare the original image with an edited version, visualizing the changes in real-time by swiping the slider.

2. **E-commerce Product Variations**:
   - Customers can compare product variations (e.g., color, texture) by swiping between two images, improving their shopping experience.

3. **UX/UI Design Comparison**:
   - Designers can showcase different versions of UI layouts or design prototypes to clients or teams by comparing them side-by-side.

4. **Medical Image Comparison**:
   - Doctors or radiologists can compare medical images (e.g., MRI scans) to observe changes over time, enhancing diagnostic efficiency.

5. **Gaming/3D Modeling**:
   - Game developers or artists can compare textures, environments, or character models for quality assurance and creative decision-making.

### **Summary of Core Functionality**
- The app’s core feature is the dynamic comparison between two images using a draggable slider, controlled by gesture handling.
- Smooth animations ensure a seamless user experience, while the layout can be tailored to different images and use cases.




This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
