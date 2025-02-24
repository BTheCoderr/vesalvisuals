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
download_image "https://source.unsplash.com/featured/?camera,sony" "public/images/sony-camera.jpg"
download_image "https://source.unsplash.com/featured/?studio,photography" "public/images/studio-setup.jpg"
download_image "https://source.unsplash.com/featured/?event,photography" "public/images/event-photo.jpg"

# Download visualizer images
download_image "https://source.unsplash.com/featured/?music,video" "public/images/music-video.jpg"
download_image "https://source.unsplash.com/featured/?film,slate" "public/images/film-slate.jpg"
download_image "https://source.unsplash.com/featured/?video,production" "public/images/video-production.jpg"

# Download premium images
download_image "https://source.unsplash.com/featured/?premium,photography" "public/images/premium-setup.jpg"
download_image "https://source.unsplash.com/featured/?studio,professional" "public/images/premium-studio.jpg"
download_image "https://source.unsplash.com/featured/?event,luxury" "public/images/premium-event.jpg"

echo "All images downloaded successfully!" 