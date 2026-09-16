const baseRoute = '/craft-and-code/photography';

export const SEATTLE_2026 = 'seattle-2026';

interface AlbumImage {
  description: string,
  path: string
}

interface Album {
  cover: string;
  description: string;
  name: string;
  route: string;
  images: AlbumImage[]
}

const getAlbum = (
  route: string,
  name: string,
  description: string,
  images: AlbumImage[]
): Album => {
  return {
    cover: `${baseRoute}/${route}/cover.JPG`,
    description,
    name,
    route: `${baseRoute}/${route}`,
    images: images.map(image => {
      return {
        description: image.description,
        path: `${baseRoute}/${route}/${image.path}.JPG`,
        thumbnailPath: `${baseRoute}/${route}/${image.path}_THUMBNAIL.JPG`,
      }
    })
  }
};

export const ALBUM_SEATTLE_2026 = getAlbum(
  SEATTLE_2026,
  'Seattle 2026',
  'Photos from my 8 day stay in Seattle for PAX West 2026.',
  [
    {
      description: 'Convention center rest area',
      path: 'DSC00066'
    },
    {
      description: 'Musician lost in their music at PAX',
      path: 'DSC00076'
    },
    {
      description: 'Overhead view of the ballroom lights, lit green and pink',
      path: 'DSC00084'
    },
    {
      description: 'Acquisitions INC show starring Chris Perkins and Matt Mercer',
      path: 'DSC00142'
    },
    {
      description: 'Close up of a dragon miniature breathing fire',
      path: 'DSC00174'
    },
    {
      description: 'Display for a new video game at PAX',
      path: 'DSC00193'
    },
    {
      description: 'Massive wall of art for sale and display at PAX',
      path: 'DSC00220'
    },
    {
      description: 'Hot Rat Summer murals at Cal Anderson Park',
      path: 'DSC00229'
    },
    {
      description: 'Pigeons atop a building at Cal Anderson Park',
      path: 'DSC00241'
    },
    {
      description: 'Closeup of the Larian Divinity exhibit',
      path: 'DSC00246'
    },
    {
      description: 'Stern looking cat security guard at PAX',
      path: 'DSC00255'
    },
    {
      description: 'A bee resting in a flower',
      path: 'DSC00277'
    },
    {
      description: 'Persona 4 Demo station at the Atlus booth',
      path: 'DSC00290'
    },
    {
      description: 'Pike Place sign and entrance',
      path: 'DSC00296'
    },
    {
      description: 'Musician playing guitar at Pike Place',
      path: 'DSC00300'
    },
    {
      description: 'Fish toss at Pike Place',
      path: 'DSC00309'
    },
    {
      description: 'Wall art and stickers at Pike Place',
      path: 'DSC00318'
    },
    {
      description: 'Shadowy entrance to Post Alley',
      path: 'DSC00324'
    },
    {
      description: 'Closeup of the gum wall at Pike Place',
      path: 'DSC00337'
    },
    {
      description: 'Seattle skyline in the day light, with a partial view of the ferris wheel',
      path: 'DSC00363'
    },
    {
      description: 'Seattle skyline in the day light, with a partial view of the ferris wheel',
      path: 'DSC00363'
    },
    {
      description: 'Pink flowers and leaves',
      path: 'DSC00366'
    },
    {
      description: 'Mossy view from the Seattle underground',
      path: 'DSC00406'
    },
    {
      description: 'Skyscraper against a clear blue sky',
      path: 'DSC00415'
    },
    {
      description: 'Closeup of Mt. Rainier, against a foreground of jagged black rock',
      path: 'DSC00434'
    },
    {
      description: 'Mt. Rainier framed by trees',
      path: 'DSC00447'
    },
    {
      description: 'Mt. Rainier, against a foreground of trees',
      path: 'DSC00452'
    },
    {
      description: 'Valley in Mt. Rainier National Park',
      path: 'DSC00454'
    },
    {
      description: 'Trail to a mountain in Mt. Rainier National Park',
      path: 'DSC00456'
    },
    {
      description: 'Mt. Rainier in the distance',
      path: 'DSC00463'
    },
    {
      description: 'View of lakes from Naches Loop Trail',
      path: 'DSC00464'
    },
    {
      description: 'Trail to Mt. Rainier',
      path: 'DSC00465'
    },
    {
      description: 'Moss hanging from tree in Mt. Rainier National Park',
      path: 'DSC00469'
    },
    {
      description: 'Carved sign with names and stickers in Mt. Rainier National Park',
      path: 'DSC00470'
    },
    {
      description: 'Street musician playing next to a colorful suitcase',
      path: 'DSC00485'
    },
    {
      description: 'Silhouette of the Space Needle against a twilight sky',
      path: 'DSC00532'
    },
    {
      description: 'Sailboat on Elliot Bay',
      path: 'DSC00549'
    },
    {
      description: 'Overcast skies envelope a lone boat on the horizon',
      path: 'DSC00563'
    },
    {
      description: 'Two seagulls on the glassy water',
      path: 'DSC00580'
    },
    {
      description: 'Strip of light between the bay and the overcast sky',
      path: 'DSC00589'
    },
    {
      description: 'Lighthouse in Elliot Bay',
      path: 'DSC00602'
    },
    {
      description: 'Boat yard in Elliot Bay at night',
      path: 'DSC00651'
    },
    {
      description: 'Ship at night in Elliot bay, lit by window light',
      path: 'DSC00679'
    },
    {
      description: 'Seattle skyline and ferris wheel',
      path: 'DSC00688'
    }
  ]
);

export const ALBUMS = [
  ALBUM_SEATTLE_2026
];
