import styled from 'styled-components'

export const HeaderCenter = styled.div `
@keyframes headerenter {
    from {
      letter-spacing: 20px;
      opacity: .0;
    }
    to {
      letter-spacing: 0px;
      opacity: 1;
    }
}

    @-webkit-keyframes headerenter {
        from {
          letter-spacing: 20px;
          opacity: .0;
        }
        to {
          letter-spacing: 0px;
          opacity: 1;
        }
    }
    
    @keyframes headerenter {
        from {
          letter-spacing: 20px;
          opacity: .0;
        }
        to {
          letter-spacing: 0px;
          opacity: 1;
        }
    } 
`
