This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`].

## Getting Started

First, after you pull the project be sure to have all the `node-modules`:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API routes

I used the unsplashed API, and I only used the `GET` method (https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY). You can edit it in `apiKey.js`.

I created this file in order to protect this confidential information (You just need to add this file to the `.gitignore` file), in order to be sure that, every person that uses this project will create its own account for this API.

But don't worry for this time, I gave you mine ;)

## API Structure

The return from this `GET` method (that I write just above) got this structure for exemple :

```
[
    {
    0:
        alt_description: "laptop on brown wooden table"
        blur_hash: "LRIh,4_NMx9GxC%g9FIUodIURjV@"
        categories: []
        color: "#737373"
        created_at: "2020-07-01T18:30:13-04:00"
        current_user_collections: []
        description: null
        height: 4016
        id: "bXfQLglc81U"
        liked_by_user: false
        likes: 577
        links: {
            self: "https://api.unsplash.com/photos/bXfQLglc81U", 
            html: "https://unsplash.com/photos/bXfQLglc81U", 
            download: "https://unsplash.com/photos/bXfQLglc81U/download", 
            download_location: "https://api.unsplash.com/photos/bXfQLglc81U/download"
            }
        promoted_at: null
        sponsorship: {
            impression_urls: Array(1), 
            tagline: "Designed to be the Best", 
            tagline_url: "http://www.dell.com/xps", 
            sponsor: {
                …
            }
        }
        updated_at: "2021-01-31T15:11:53-05:00"
        urls: {
            raw: "https://images.unsplash.com/photo-1593642533144-3d…XwyMDMxNTV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1", 
            full: "https://images.unsplash.com/photo-1593642533144-3d…MxNTV8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85", 
            regular: "https://images.unsplash.com/photo-1593642533144-3d…XwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080", 
            small: "https://images.unsplash.com/photo-1593642533144-3d…MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400", 
            thumb: "https://images.unsplash.com/photo-1593642533144-3d…MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200"
        }
        user: {
            id: "2DC3GyeqWjI", 
            updated_at: "2021-02-01T10:02:56-05:00", 
            username: "xps", 
            name: "XPS", 
            first_name: "XPS", 
            …
        }
        width: 6016
    },
    {
    1: ...   
    }
]
```

I used this array of Objects to display them as table of cards, then when I click on one of these cards, it shows the details about the artist that made the shot. I pass the the props of the card directly in the router.