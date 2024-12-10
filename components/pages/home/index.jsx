"use client"
import SEO from "@/components/data/seo";
import WebHeader from "@/components/layout/headers/web-header/header";
import Banner from "./banner";
import About from "./about";
import Services from "./services";
import SkillArea from "./skill";
import Team from "./team";
import ContactForm from "./contact-form";
import WorkProcess from "./work";
import TestimonialTwo from "./testimonial";
import Blog from "./blog";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";
import BlogStandardMain from "../blogs/blog-standard/blog-standard";

const HomeComponent = () => {
    return (
        <>
            <SEO pageTitle="IT Consulting" />
            <WebHeader  />
            <Banner />
            <BlogStandardMain />
            {/* <About />
            <Services />
            <SkillArea />
            <Team />
            <ContactForm />
            <WorkProcess />
            <TestimonialTwo /> */}
            <Blog />
            <Footer />
            <ScrollToTop />  
        </>
    );
};

export default HomeComponent;