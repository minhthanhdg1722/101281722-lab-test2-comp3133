export interface Mission{
    flight_number: number;
    mission_name: string;
    launch_year: number;
    details: string,
    rocket:{
        rocket_id: string,
        rocket_name: string,
        rocket_type: string
    },
    launch_site: {
        site_id: string,
        site_name: string,
        site_name_long: string
    },
    links: {
        mission_patch: string 
        mission_patch_small: string 
        article_link: string
        video_link: string
        wikipedia: string
    }
}

