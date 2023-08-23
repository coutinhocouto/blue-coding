"use client";
import globalStyling from "@/styles/General";
import styled from "styled-components";

export const ItemHolder = styled.section`
    ${globalStyling.container}
    gap: 1%;;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ItemSingle = styled.div`
    width: 19%;
    height: 100px;
    position: relative;
    margin-bottom: 10px;
`;