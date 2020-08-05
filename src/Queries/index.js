import {ContentfulClient} from 'react-contentful'


export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('1awFE1tJxCgF8NfJB5js1M');
    return data;
}

export const getContentfulHomepage  = async () => {
    const data = await contentfulClient.getEntry({entryId:'1QUk6v2ByvCgmlPamGFPGc', include: 3});
    return data;
}


