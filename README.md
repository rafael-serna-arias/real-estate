# Real Estate 3D

An interactive real estate experience built with React and Three.js, designed to showcase a property through an immersive 3D environment.

The project combines interactive 3D models, architectural visualization, and a responsive interface to create a more engaging way to explore a property and its floor plans.

## Overview

This project explores how 3D visualization can be integrated into a real estate website to present architectural spaces in a more interactive and visual way.

Users can explore the property, interact with different areas, and open detailed information about each floor, including its layout, characteristics, and available information.

## Features

* Interactive 3D architectural visualization
* Real-time camera controls
* Interactive floor selection
* Floor information modals
* Floor plans and property details
* Responsive layout for desktop and mobile
* Custom 3D models created for the experience


## Built With

* React
* React Three Fiber
* Three.js
* React Three Drei
* SCSS
* Vite
* Blender

## 3D Experience

The 3D environment is built with **React Three Fiber**, allowing Three.js scenes and models to be integrated directly into the React component structure.

The architectural models were created and prepared in **Blender**, then imported into the web experience using GLTF/GLB assets.

To improve performance, the project uses **baked lighting**. Instead of relying on real-time lights and shadows, the lighting information is baked into the textures in Blender. This reduces the amount of real-time rendering work required by the browser while maintaining the intended visual appearance of the architectural environment.



## Responsive Design

The experience was designed to adapt to different screen sizes, including desktop and mobile devices.

Special attention was given to the 3D viewport, modal interactions, floor information, and touch-friendly controls to maintain a consistent experience across devices.


## Purpose

This project was created as part of my front-end development and design portfolio to explore the combination of **web development, 3D visualization, and architectural design**.

It focuses on creating a digital experience where the visual qualities of a physical space can be translated into an interactive web interface.
