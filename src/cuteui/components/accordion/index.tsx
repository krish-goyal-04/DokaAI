import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { styled, Theme, CSSObject } from "@mui/material/styles";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row',
    backgroundColor: 'var(--background-offset-strong)',
    '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(270deg)',
        transition: 'transform 0.2s',
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(360deg)',
    },
    '& .MuiAccordionSummary-content': {
        // marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    // padding: theme.spacing(2),
    '&.MuiAccordionDetails-root ': {
        padding: '0px',
    }
}));

interface AccordionsProps {
    expandedAccordion:boolean;
    onchange:()=>void;
    summaryText:string;
    children:React.ReactNode;
}

const index = ({expandedAccordion,onchange,summaryText,children}:AccordionsProps) => {
    return (
            <Accordion
                expanded={expandedAccordion}
                onChange={()=> onchange()}
                sx={{
                    flexGrow: expandedAccordion ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    minHeight: '2.5rem',
                    maxHeight: expandedAccordion ? '100%' : '2.5rem',
                    boxShadow: 'none',
                    border: 'none',
                    '&:before': {
                        display: 'none'
                    },
                    '& .MuiAccordionSummary-content': {
                        margin: '5px 0px',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                        '&.MuiAccordionSummary-root': {
                            minHeight: '2.5rem'
                        },
                    }}
                >
                    <div className='subtextMedium text-text-primary'>
                        {summaryText}
                    </div>
                </AccordionSummary>
                <AccordionDetails sx={{ overflowY: 'auto', height: '100%' }}>
                    {children}
                </AccordionDetails>

            </Accordion>
    )
}

export default index