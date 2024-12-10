"use client"
import SEO from "@/components/data/seo";
import TeamMain from "./team";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderWeb from "@/components/layout/headers/web-header/header";

const TeamPageTwo = () => {
    return (
        <>
            <SEO pageTitle='Team Two' />
            <HeaderWeb />
            <TeamMain />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default TeamPageTwo;