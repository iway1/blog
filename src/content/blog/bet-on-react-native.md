---
title: I'm Glad I Bet on React Native
author: Isaac Way
pubDatetime: 2023-06-01T18:24:36.768Z
postSlug: bet-on-react-native
featured: true
draft: false
tags:

description: Years ago I decided to pick up React Native. That turned out to be a really good idea.
---

About 3 years ago I was out of work and the company my friend worked at decided they needed a mobile app. I needed work and had a tiny bit of experience in mobile dev with native iOS Swift, and my friend was kind enough to hook me up with the opportunity just because he knew I had some mobile experience.

The problem was that the company wanted a cross platform mobile app, and I only knew iOS. At the time I hadn't even really looked into React Native at all, but I remember some guy telling me one time how great it was and knew that I could build cross platform mobile apps with it.

So I said screw it and just learned React Native to be able to build this thing for these people.

I didn't know what I was doing, I just started looking up how to write React Native code and started building stuff. The app was extremely simple, and we didn't have a design or anything. So I just sort of tried to style things in a way that made it look decent, then we launched the app.

So, that was the beginning of my React Native career. After that I did some more contract work, and then eventually got a job at a small agency where I have been working for two years. If I hadn't randomly had that opportunity, and that opportunity didn't have the requirements of cross platform, I never would have learned it.

## Lucky Guess

It was really happenstance that I ended up becoming a React Native developer, but I'm glad I did, because it's been exploding in popularity. Let's look at some numbers as of June 1st, 2023.

React Native makes up:

- 25% of the top 100 shopping apps
- 26% of the top 100 finance apps
- 28% of the top 100 food and drink apps

Given the fact that there are many cross platform competitors (Flutter, Ionic, Kotlin, Xamarin) as well as Native options, that's a decent percentage. Importantly, that percentage was much lower just a few years ago. So adoption is increasing, and will probably continue to increase.

## Are React Native apps _good_?

We can definitely build apps faster but are the apps _good_? Some times you may see criticism online about React Native apps being janky or lower quality than Native apps or Flutter. The app store numbers would say other wise.

For example, in the case of the top 100 shopping apps, the average app rating is 4.78 which is higher than the average of 4.7 of the rest of the apps. Flutter here has an average rating 3.84.

I don't really think it's worth digging to much deeper into this.

high ratings => users like the apps => the apps are good.

End of story

## Why Adoption is Increasing

Why is adoption increasing, you might ask? Generally speaking cross platform frameworks reduce development costs significantly simply because 1 codebase is easier to build and maintain than 2. Duh.

But why React Native specifically? What does it do better than the other cross-platform frameworks? I'm not sure I'm the best person to answer that question, one great article on Flutter versus React Native is [this article from Infinite Red](https://shift.infinite.red/flutter-is-better-than-react-native-fed10c92a768). (Infinite Red is a premiere React Native agency).

Some reasons why I think React Native has advantages over other frameworks:

- Familiar React syntax - A React developer can quickly become a good React Native developer. The experience of writing code is very similar, a lot of the tools used in React are available in React Native. This makes it way easier to find competent developers that can hit the ground running. You don't _need_ to hire a React Native developer, a React developer may just as well be able to hit the ground running.
- Expo - Expo is owning the developer experience for React Native. This is a pretty big advantage, there's a company that exists solely to make the DX better that's completely separate from the core team of React Native. They provide amazing tools for developing. They provide out-of-the-box build pipelines that any dev can use very easily. They offer services that make sending push notifications much easier. They offer a bunch of really well maintained libraries that seem to always work well. The list goes on.
- Typescript - Right now typescript offers the fastest full stack development experience that exists, thanks to tools like tRPC. It's also [one of the most loved](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) languages. People often don't view this a real advantage, but speaking from experience using full stack typescript in a monorepo architecture can dramatically improve developer productivity as well as make code less error prone. It makes an absolutely massive difference.
- Major community contributions - React Native has some amazing community contributors building really powerful libraries that make it easier to build great apps. react-native-reanimated for example makes it much easier to build beautiful animation is React Native. This is just one example of many. Some other examples of great individual builders who have contributed a ton to the ecosystem are: [gorhom](https://github.com/gorhomh), [mark rousavy](https://github.com/mrousavy), [software mansion](https://github.com/software-mansion).

## Problems with React Native

Speaking from personal experience, React Native isn't perfect. There are a lot of headaches that you might not encounter very often doing Native development.

### Random Jank

Sometimes jank just randomly appears and has to be fixed. For example I've seen some flickering issues during renders in `react-navigation` that appeared for pretty much no reason, and had to just randomly change stuff until they were no longer happening. The issue was causing some element to appear in the wrong place on first render, and then it would visibly "jump" to the correct location. This is just one example, and stuff like that isn't super common, but it does happen and does require the developer to fix it or have jank in their app.

### Dependencies

Another big issue is that you have to rely on React Native SDKs and libraries to do a lot of things. To do most things, really.

These libraries may not be well maintained, or they may be well maintained and still have some critical issues in them. For example we once used a library called Revenue Cat, which makes it much easier to implement in-app purchases. The Revenue Cat service as a whole is amazing, but at the time it was having an issue where one of its promise based methods never resolved. This caused a serious production issue where the app could get stuck permenantly in an invalid state, and we had to create a workaround.

Just look at the [BlueSky Social package.json](https://github.com/bluesky-social/social-app/blob/main/package.json). Look at the number of dependencies there are to do things that are pretty common in most apps. `react-native-splash-screen` for splash screens, `react-native-linear-gradient` for gradients. The list goes on. Each of these libraries are maintained by different people who you may or may not trust, and each of them has a least a chance of breaking in some unforseen way.

In 2023, most libraries "just work", but the fact that there are so many dependencies doing complex things on each platform means there's a very real chance that one of them does something it shouldn't and the app developer has to create some sort of workaround. And with the complexities of Native development, these problems may or may not be easy to deal with.

### Build Issues

Getting a React Native project running on a machine for the first time is not so simple.

In my experience, React Native in particular is very likely to have build issues from time to time that can sometimes take a while to fix.

Thankfully Expo makes this process a lot more consistent as expo does some stuff to ensure package compatibility, as well as allowing regeneration of Native files if something goes wrong.

### Stuff That's Not A Problem

This is a list of things that people might think would be an issue in using React Native but aren't really issues practically speaking:

- Performance - React Native typically has performance that feels as good as a mobile app if done correctly. Anything that makes the performance degrade is usually the fault of the developer and can be fixed.
- Bad UX - User experience in a React Native app can be on par with Native as far as the user is concerned. 60 fps, buttery smooth scrolling and interactions are completely possible and not even that hard to achieve as long as we don't do anything dumb. Is a Native app more likely to have a better UX than a React Native app? Sure, but the difference isn't really as big as people seem to think and practically speaking the UX in React Native can feel as good to the user as a Native app.
- React - People love to hate on React, but there's a reason it has so much staying power. The component system + the composability of hooks is unmatched in improving developer productivity in the mobile world. In the web world there are competitors, but in mobile I personally believe that a great React Native developer is going to be able to ship more features than a great Native developer, or a great Flutter developer, and the reason for that is the composability of react.

## The Future of React Native

The future is looking bright for React Native. Now that major companies are adopting it and seeing success, it's pretty likely that more and more companies are going to continue to do so. It's a great time to get started or keep going.

Personally speaking I'm glad I happened upon it, and do feel as if it makes my current skillset very desirable to potential employers (which ofc just makes me feel good inside).

Thanks for reading :)
