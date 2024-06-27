import React from "react";

import { Header } from './Header/HeaderPart';
import { GarrantieBar } from './Header/Garanti';
import { Collection } from './Collection/CollectionPart';

import { Necklace } from "./Acceuil/PresNecklace/NeckLace";

import { Meeting } from "./Meeting/Meeting";
import { MyFooter } from "./Footer/footer"

export function HomePage() {
    return (
        <>
            <Header />
            <GarrantieBar />
            <Collection />

            <Necklace />

            <Meeting />
            <MyFooter />
        </>
    );
}