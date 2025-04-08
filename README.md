# ilw-profile-list

Links: **[ilw-profile-list in Builder](https://builder3.toolkit.illinois.edu/component/ilw-profile-list/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The profile list is a compact version of the profile, used in the directory component. 

The image slot and subtitle slot are optional. The name slot is required. 

If you use the circle image, make sure your image has the same height and width. If your image is portrait view, then you should not use the `circle` attribute. 

### Attributes

* `circle`: This will change the image to a circle.

## Code Examples

```html
<ilw-profile-list>
    <img slot="image" href="/img/profile.webp" alt="Jane Smith">
    <a slot="name">Smith, Jane</a>
    <div slot="subtitle">Department of Redundancy Department</div>
    <div>jsmith@illinois.edu | (217) 123-4567</div>
</ilw-profile-list>
```

## Accessibility Notes and Use

This is using the standard font / background contrast, so color contrast shouldn't be an issue. 

Make sure you add a proper alt text for the image. Do not include "portrait of" or "picture of" because screen readers will recognize that this is an image. When possible, allow users to enter in their own alt text because people identifying how they want to be described is essential to self-image. 

Because this is most likely used to list people, please add these in an unordered list. 

## External References

None
