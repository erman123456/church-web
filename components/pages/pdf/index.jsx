"use client"
import SEO from "@/components/data/seo";
import HeaderWeb from "@/components/layout/headers/web-header/header";
import PdfViewer from "./pdf-viewer-component";

const PdfView = () => {
    return (
        <>
            <SEO pageTitle="IT Consulting" />
            <HeaderWeb />
            <PdfViewer />
        </>
    );
};

export default PdfView;