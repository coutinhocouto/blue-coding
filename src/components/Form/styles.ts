"use client";
import globalStyling from "@/styles/General";
import styled from "styled-components";

export const FormHolder = styled.div`
    ${globalStyling.container}
    flex-direction: column;

    > img {
        margin: 0 auto 20px;
        display: block;
    }

    > div {
        margin-bottom: 30px;
        display:  flex;
        gap: 1%;

        input {
            width: 50%;
            padding: 10px;
            border: 1px solid #016092;
        }

        button {
            width: 24%;
            padding: 10px;
            background-color: ${globalStyling.primaryColor};
            border: 1px solid ${globalStyling.secondaryColor};
            color: #fff;

            &:hover {
                background-color: ${globalStyling.secondaryColor};
            }
        }
    }
`;