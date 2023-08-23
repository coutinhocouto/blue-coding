"use client";
import styled from "styled-components";
import globalStyling from "@/styles/General";

export const ActionsHolder = styled.div`
  ${globalStyling.container}
  gap: 1%;

  button {
    width: 33%;
    background-color: ${globalStyling.primaryColor};
    border: 1px solid ${globalStyling.secondaryColor};
    color: #fff;
    padding: 10px;

    &:hover {
        background-color: ${globalStyling.secondaryColor};
    }
  }
`;
