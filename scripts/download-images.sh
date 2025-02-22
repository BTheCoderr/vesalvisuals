#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download photoshoot images
curl -o public/images/photoshoot-1.jpg "https://source.unsplash.com/800x600/?portrait,photography"
curl -o public/images/photoshoot-2.jpg "https://source.unsplash.com/800x600/?event,photography"
curl -o public/images/photoshoot-3.jpg "https://source.unsplash.com/800x600/?studio,photography"

# Download visualizer images
curl -o public/images/visualizer-1.jpg "https://source.unsplash.com/800x600/?video,production"
curl -o public/images/visualizer-2.jpg "https://source.unsplash.com/800x600/?film,making"
curl -o public/images/visualizer-3.jpg "https://source.unsplash.com/800x600/?camera,recording"

# Download premium images
curl -o public/images/premium-1.jpg "https://source.unsplash.com/800x600/?professional,photography"
curl -o public/images/premium-2.jpg "https://source.unsplash.com/800x600/?cinematography"
curl -o public/images/premium-3.jpg "https://source.unsplash.com/800x600/?photoshoot,studio" 