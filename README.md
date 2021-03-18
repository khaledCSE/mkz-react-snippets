# mkz-react-snippets

Simple and easy to use react snippets.

## Installation

```
npm i mkz-react-snippets
```

## Components

| Name            | Description         | Note                     |
| --------------- | ------------------- | ------------------------ |
| FollowZoomImage | Applies Follow Zoom | Applies on `div` element |

## Usage

### FollowZoomImage

Important notes of using this component:

-   `div` component.
-   Needs to be controlled by a stylesheet.
-   `class_name` is the class mentioned in the styleSheet
-   CSS Module className is allowed.

```
import React from 'react';
import { FollowZoomImage } from 'mkz-react-snippets';

import './MyStyle.css';

import image from './src/img/myImage.png';

export const MyAwesomeComponent = () => {
    return <FollowZoomImage class_name={'myClass'} imagePath={image} />
}
```
