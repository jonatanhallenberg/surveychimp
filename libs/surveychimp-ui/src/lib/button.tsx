import styled from 'styled-components';

type ButtonProps = {
    label?: string
    variant?: "primary" | "secondary"
}

const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.variant === "primary" ? "#97B09D" : "#E45454" };
    text-align: center;
    font-family: "Arial";
    font-size: 20;
    border-radius: 56px;
    border: 0;
    padding: 10px 50px;
`;

const Button = ({ label, variant }: ButtonProps) => {
    return <StyledButton variant={variant}>{label}</StyledButton>
}

export default Button;