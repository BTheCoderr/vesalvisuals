#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Function to download with retry
download_image() {
    local url="$1"
    local output="$2"
    local max_retries=3
    local retry=0
    
    while [ $retry -lt $max_retries ]; do
        if curl -L -A "Mozilla/5.0" -o "$output" "$url"; then
            echo "Successfully downloaded $output"
            return 0
        fi
        let retry++
        echo "Retry $retry for $output"
        sleep 2
    done
    return 1
}

# Download photoshoot images
download_image "https://source.unsplash.com/1200x800/?portrait,professional" "public/images/photoshoot-1.jpg"
download_image "https://source.unsplash.com/1200x800/?event,photography" "public/images/photoshoot-2.jpg"
download_image "https://source.unsplash.com/1200x800/?studio,photoshoot" "public/images/photoshoot-3.jpg"

# Download visualizer images
download_image "https://source.unsplash.com/1200x800/?video,production" "public/images/visualizer-1.jpg"
download_image "https://source.unsplash.com/1200x800/?film,making" "public/images/visualizer-2.jpg"
download_image "https://source.unsplash.com/1200x800/?camera,recording" "public/images/visualizer-3.jpg"

# Download premium images
download_image "https://source.unsplash.com/1200x800/?professional,studio" "public/images/premium-1.jpg"
download_image "https://source.unsplash.com/1200x800/?cinematography,professional" "public/images/premium-2.jpg"
download_image "https://source.unsplash.com/1200x800/?photography,premium" "public/images/premium-3.jpg" 