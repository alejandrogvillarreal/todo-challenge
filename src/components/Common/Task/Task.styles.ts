import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import { DARK_GRAY, BLACK } from '../../../styles';

export const TaskContainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        margin-right: 20px;
    }
    svg {
        cursor: pointer;
    }
`;

export const Label = styled(Typography)`
    font-size: 14px;
    color: ${DARK_GRAY};
    span {
        color: ${BLACK};
    }
`;

export const Title = styled.span`
    font-size: 20px;
    color: ${BLACK};
`;

export const Description = styled.div`
    font-size: 14px;
    color: ${BLACK};
`;