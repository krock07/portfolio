import styled from 'styled-components'


export const LayoutWrapper = styled.div `
        padding: 0px;
        margin: auto;
        width: 100%;
        height: auto;
`;

// grid container
export const GridContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      background: #ffffff;
      border-bottom: solid 1px #ccc;
      @media  screen and (min-width: 768px) {
              grid-template-columns: 1fr 1fr 1fr;
              gap: 1.5 rem:
              background: #ffffff;
    border-bottom: solid 1px #ccc;
//     padding: 2.75em 1.75em 2.75em 1.75em;
      }

      img {
              width: 100%
              
      }
`