'use client';

import Header from '../components/Header';
import ContactFooter from '../components/ContactFooter';
import Image from 'next/image';
import { useState, useEffect, Suspense, useRef, useCallback } from 'react';
import { getImageUrl, imageStats } from '../../lib/cloudinary-images';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  description: string;
  aspect: string;
}

const galleryItems = {
  portraits: [
    { 
      src: getImageUrl('2ND02732.JPG'),
      title: 'Portrait 2ND02732', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572581/vesalvisuals/2ND02760.jpg',
      title: 'Portrait 2ND02760', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572584/vesalvisuals/2ND02777.jpg',
      title: 'Portrait 2ND02777', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572586/vesalvisuals/2ND02790.jpg',
      title: 'Portrait 2ND02790', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572588/vesalvisuals/2ND02924.jpg',
      title: 'Portrait 2ND02924', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572590/vesalvisuals/2ND02989.jpg',
      title: 'Portrait 2ND02989', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572592/vesalvisuals/2ND03148.jpg',
      title: 'Portrait 2ND03148', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572594/vesalvisuals/2ND03177.jpg',
      title: 'Portrait 2ND03177', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572596/vesalvisuals/2ND03188.jpg',
      title: 'Portrait 2ND03188', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572598/vesalvisuals/2ND03217.jpg',
      title: 'Portrait 2ND03217', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572600/vesalvisuals/2ND05173.jpg',
      title: 'Portrait 2ND05173', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572601/vesalvisuals/2ND05219-2.jpg',
      title: 'Portrait 2ND05219-2', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572604/vesalvisuals/2ND05404-2.jpg',
      title: 'Portrait 2ND05404-2', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572606/vesalvisuals/2ND06370.jpg',
      title: 'Portrait 2ND06370', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572608/vesalvisuals/2ND06568.jpg',
      title: 'Portrait 2ND06568', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572610/vesalvisuals/2ND06818.jpg',
      title: 'Portrait 2ND06818', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572611/vesalvisuals/2ND07006.jpg',
      title: 'Portrait 2ND07006', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572613/vesalvisuals/2ND07198.jpg',
      title: 'Portrait 2ND07198', 
      category: 'Portrait',
      description: 'Professional portrait photography',
      aspect: 'portrait'
    }
  ],
  studio: [
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572457/vesalvisuals/093A4824.jpg',
      title: 'Studio 093A4824', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572459/vesalvisuals/093A4852.jpg',
      title: 'Studio 093A4852', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572460/vesalvisuals/093A6993.jpg',
      title: 'Studio 093A6993', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572462/vesalvisuals/093A7005.jpg',
      title: 'Studio 093A7005', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572464/vesalvisuals/093A7035.jpg',
      title: 'Studio 093A7035', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572466/vesalvisuals/093A7038.jpg',
      title: 'Studio 093A7038', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572468/vesalvisuals/093A7069.jpg',
      title: 'Studio 093A7069', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572470/vesalvisuals/093A7085.jpg',
      title: 'Studio 093A7085', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572473/vesalvisuals/093A7101.jpg',
      title: 'Studio 093A7101', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572475/vesalvisuals/093A7142.jpg',
      title: 'Studio 093A7142', 
      category: 'Studio',
      description: 'Professional studio photography',
      aspect: 'portrait'
    }
  ],
  events: [
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572483/vesalvisuals/20250604-DSC00682.jpg',
      title: 'Event 20250604-DSC00682', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572484/vesalvisuals/20250604-DSC00703.jpg',
      title: 'Event 20250604-DSC00703', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572487/vesalvisuals/20250604-DSC00789.jpg',
      title: 'Event 20250604-DSC00789', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572488/vesalvisuals/20250604-DSC00854.jpg',
      title: 'Event 20250604-DSC00854', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572490/vesalvisuals/20250604-DSC00877.jpg',
      title: 'Event 20250604-DSC00877', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572492/vesalvisuals/20250604-DSC00884.jpg',
      title: 'Event 20250604-DSC00884', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572494/vesalvisuals/20250604-DSC00888.jpg',
      title: 'Event 20250604-DSC00888', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572496/vesalvisuals/20250604-DSC00913.jpg',
      title: 'Event 20250604-DSC00913', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572498/vesalvisuals/20250604-DSC00927.jpg',
      title: 'Event 20250604-DSC00927', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572500/vesalvisuals/20250604-DSC00945.jpg',
      title: 'Event 20250604-DSC00945', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572502/vesalvisuals/20250604-DSC00965.jpg',
      title: 'Event 20250604-DSC00965', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572503/vesalvisuals/20250604-DSC00975.jpg',
      title: 'Event 20250604-DSC00975', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572505/vesalvisuals/20250720-A7_00169.jpg',
      title: 'Event 20250720-A7_00169', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572507/vesalvisuals/20250720-A7_00245.jpg',
      title: 'Event 20250720-A7_00245', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572509/vesalvisuals/20250720-A7_00351.jpg',
      title: 'Event 20250720-A7_00351', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572511/vesalvisuals/20250720-A7_00388.jpg',
      title: 'Event 20250720-A7_00388', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572515/vesalvisuals/20250720-A7_00475.jpg',
      title: 'Event 20250720-A7_00475', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572517/vesalvisuals/20250720-A7_00537.jpg',
      title: 'Event 20250720-A7_00537', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572519/vesalvisuals/20250720-A7_00931.jpg',
      title: 'Event 20250720-A7_00931', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572521/vesalvisuals/20250720-A7_01070.jpg',
      title: 'Event 20250720-A7_01070', 
      category: 'Event',
      description: 'Professional event photography',
      aspect: 'landscape'
    }
  ],
  lifestyle: [
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572523/vesalvisuals/20250727-A7_00041.jpg',
      title: 'Lifestyle 20250727-A7_00041', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572525/vesalvisuals/20250727-A7_00146.jpg',
      title: 'Lifestyle 20250727-A7_00146', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572527/vesalvisuals/20250727-A7_00185.jpg',
      title: 'Lifestyle 20250727-A7_00185', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572530/vesalvisuals/20250727-A7_00268.jpg',
      title: 'Lifestyle 20250727-A7_00268', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572531/vesalvisuals/20250727-A7_00285.jpg',
      title: 'Lifestyle 20250727-A7_00285', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572534/vesalvisuals/20250727-A7_00291.jpg',
      title: 'Lifestyle 20250727-A7_00291', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572535/vesalvisuals/20250727-A7_00387.jpg',
      title: 'Lifestyle 20250727-A7_00387', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572539/vesalvisuals/20250727-A7_00410.jpg',
      title: 'Lifestyle 20250727-A7_00410', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572541/vesalvisuals/20250727-A7_00474.jpg',
      title: 'Lifestyle 20250727-A7_00474', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572543/vesalvisuals/20250727-A7_00481.jpg',
      title: 'Lifestyle 20250727-A7_00481', 
      category: 'Lifestyle',
      description: 'Professional lifestyle photography',
      aspect: 'landscape'
    }
  ],
  collections: [
    { 
      src: '/images/optimized/20250807-DSC00041.jpg',
      title: 'Collection 20250807-DSC00041', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00052.jpg',
      title: 'Collection 20250807-DSC00052', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00070.jpg',
      title: 'Collection 20250807-DSC00070', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00072.jpg',
      title: 'Collection 20250807-DSC00072', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00076.jpg',
      title: 'Collection 20250807-DSC00076', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00078.jpg',
      title: 'Collection 20250807-DSC00078', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00082.jpg',
      title: 'Collection 20250807-DSC00082', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00096.jpg',
      title: 'Collection 20250807-DSC00096', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00101.jpg',
      title: 'Collection 20250807-DSC00101', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00112.jpg',
      title: 'Collection 20250807-DSC00112', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00121.jpg',
      title: 'Collection 20250807-DSC00121', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00125.jpg',
      title: 'Collection 20250807-DSC00125', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00153.jpg',
      title: 'Collection 20250807-DSC00153', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: '/images/optimized/20250807-DSC00156.jpg',
      title: 'Collection 20250807-DSC00156', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572556/vesalvisuals/20250816-DSC01586.jpg',
      title: 'Collection 20250816-DSC01586', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572559/vesalvisuals/20250816-DSC01634.jpg',
      title: 'Collection 20250816-DSC01634', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572561/vesalvisuals/20250816-DSC01656.jpg',
      title: 'Collection 20250816-DSC01656', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572563/vesalvisuals/20250816-DSC01657.jpg',
      title: 'Collection 20250816-DSC01657', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572565/vesalvisuals/20250816-DSC01696.jpg',
      title: 'Collection 20250816-DSC01696', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572568/vesalvisuals/20250816-DSC01710.jpg',
      title: 'Collection 20250816-DSC01710', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572570/vesalvisuals/20250816-DSC01726.jpg',
      title: 'Collection 20250816-DSC01726', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572573/vesalvisuals/20250816-DSC01795.jpg',
      title: 'Collection 20250816-DSC01795', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572477/vesalvisuals/14.jpg',
      title: 'Collection 14', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572480/vesalvisuals/15.jpg',
      title: 'Collection 15', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572575/vesalvisuals/24.jpg',
      title: 'Collection 24', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572614/vesalvisuals/ALD_2687.jpg',
      title: 'Collection ALD_2687', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572616/vesalvisuals/ALD_2727.jpg',
      title: 'Collection ALD_2727', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572618/vesalvisuals/ALD_2728.jpg',
      title: 'Collection ALD_2728', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572620/vesalvisuals/DSC00041.jpg',
      title: 'Collection DSC00041', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572622/vesalvisuals/DSC00289.jpg',
      title: 'Collection DSC00289', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    },
    { 
      src: 'https://res.cloudinary.com/djvuf67ke/image/upload/v1755572623/vesalvisuals/DSC00290.jpg',
      title: 'Collection DSC00290', 
      category: 'Collection',
      description: 'Professional photography collection',
      aspect: 'landscape'
    }
  ]
};



const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Enhanced lazy loading with better performance
  const loadImage = useCallback((index: number) => {
    if (!visibleImages.has(index)) {
      setVisibleImages(prev => new Set([...prev, index]));
    }
  }, [visibleImages]);

  // Initialize intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            loadImage(index);
          }
        });
      },
      {
        rootMargin: '200px', // Increased margin for smoother loading
        threshold: 0.01 // Lower threshold for earlier detection
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadImage]);

  // Observe images when they're added to DOM
  useEffect(() => {
    imageRefs.current.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });
  }, [visibleImages]);

  const getFilteredItems = (): GalleryItem[] => {
    return Object.values(galleryItems).flat();
  };

  // Optimized image loading with priority for first few images
  const shouldPrioritize = (index: number) => index < 12; // First 12 images load immediately

  return (
    <main className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            Capturing life&apos;s most precious moments with professional photography and videography services
          </p>
          <div className="mt-4 text-sm text-cream/60">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {imageStats.cloudinaryPercentage}% Cloudinary Optimized • Lightning Fast Loading
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {getFilteredItems().map((item: GalleryItem, index: number) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                data-index={index}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  item.aspect === 'portrait' ? 'aspect-[3/4]' : 
                  item.aspect === 'landscape' ? 'aspect-[4/3]' : 
                  'aspect-square'
                }`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Placeholder while loading */}
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                
                {/* Actual image with lazy loading */}
                {visibleImages.has(index) && (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    priority={shouldPrioritize(index)}
                    loading={shouldPrioritize(index) ? 'eager' : 'lazy'}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5p_tQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    style={{
                      objectPosition: 'center center' // Ensure focal point is centered
                    }}
                    onLoad={() => {
                      // Remove placeholder when image loads
                      const element = imageRefs.current[index];
                      if (element) {
                        const placeholder = element.querySelector('.bg-gray-200');
                        if (placeholder) {
                          placeholder.classList.add('opacity-0');
                          setTimeout(() => placeholder.remove(), 300);
                        }
                      }
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg object-contain"
              priority
              style={{
                objectPosition: 'center center'
              }}
            />
          </div>
        </div>
      )}

      <Suspense fallback={<div className="bg-navy py-16"><div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">Loading contact form...</div></div>}>
        <ContactFooter />
      </Suspense>
    </main>
  );
};

export default GalleryPage; 