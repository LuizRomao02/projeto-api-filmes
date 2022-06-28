import styled from 'styled-components';

export const Movie = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;


span{
    font-weight: bold;
    font-size: 100%;
    text-aling: center;
    margin: 0 1rem;
}

a{
    transition: all 0.3s;
}

a:hover{
    transform: scale(1.1);
}

img{
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
}
`