# ilw-profile-list

Links: **[ilw-profile-list in Builder](https://builder3.toolkit.illinois.edu/component/ilw-profile-list/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The profile list is a compact version of the profile, used in the directory component. 

All four slots (`image`, `name`, `title`, and main) are required. 

If you use the circle image, make sure your image has roughly the same height and width. 

You can use the helper class `ilw-profile-list-container` to put this in an unordered list.  

### Attributes

* `circle`: This will change the image to a circle.
* `padding:` standard length / percentage CSS of padding around the components. 

## Code Examples

```html
<ilw-profile-list>
    <a slot="name" href="#">Smith, Jane</a>
    <img slot="image" src="/img/profile.webp" alt="Jane Smith">
    <div slot="title">Department of Redundancy Department</div>
    <div><a href="#">jsmith@illinois.edu</a> | <a href="#">(217) 123-4567</a></div>
</ilw-profile-list>
```

## Accessibility Notes and Use

This is using the standard font / background contrast, so color contrast shouldn't be an issue. 

Make sure you add a proper alt text for the image. Do not include "portrait of" or "picture of" because screen readers will recognize that this is an image. When possible, allow users to enter in their own alt text because people identifying how they want to be described is essential to self-image. 

Because this is most likely used to list people, please add these in an unordered list with the helper class `ilw-profile-list-container`. You can use the grid CSS to create grids and handle padding in between items.

```
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, auto));
    column-gap: 20px;
    row-gap: 20px;
```

For the phone number, you may want to use the `&#8209;` character as a non-breaking hyphen. 

The name is first semantically, even though visually, the picture is first. This is to ensure that screen readers read the name first before a description of the person is read. 

## External References

None
