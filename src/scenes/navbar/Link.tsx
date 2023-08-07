import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props={
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    // Links must be in lowercase.
    // If a page's name includes space, this regex deletes it.
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
    // TS does not know we converted page, so we use 'as'

    return (
        <AnchorLink
            className={`${selectedPage===lowerCasePage ? "text-primary-500":""}
                transition duration-500 hover:text-primary-300
            `}
            href={`#${lowerCasePage}`}
            onClick={()=>setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
}
 
export default Link;