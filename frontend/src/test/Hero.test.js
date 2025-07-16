import React from "react";
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";


//Test Suite

describe("Hero Component",() => {
    test("render hero image",() => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png");


});


        test("render signup button",() => {
            render(<Hero/>);
            const signupButton = screen.getAllByRole("Button",{name:"/Signup now/i"});
            expect(signupButton).toBeInTheDocument();
            expect(heroImage).toHaveClass("btn-primary");
        });

    
});