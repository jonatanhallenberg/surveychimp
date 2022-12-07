import styled from 'styled-components';

type ButtonProps = {
    label: string
}

const StyledButton = styled.button`
    background-color: 97B09D;
    text-align: center;
    font-family: Armata;
    font-size: 19;
    border-radius: 56px;
    border: 0;
`;

const Button = ({ label }: ButtonProps) => {
    return <StyledButton>{label}</StyledButton>
}

export default Button;