import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, AccordionIcon, AccordionButton, AccordionPanel, HStack, Text, VStack, Input, Button } from "@chakra-ui/react";


function calcDiameter(n, m, ccLength) {
    const sqrt3 = 1.7320;
    const pi = 3.1415;
    return sqrt3 * ccLength * Math.sqrt(n * n + m * m + n * m) / pi;
}


function Diameter() {
    const [ n, setN ] = useState(6);
    const [ m, setM ] = useState(5);
    const [ d, setD ] = useState(0);

    const [ ccLength, setCcLength ] = useState(0.142);

    useEffect(() => {
        setD(calcDiameter(n, m, ccLength));
    }, [n, m, ccLength]);

    function defaultParams() {
        setN(6);
        setM(5);
        setCcLength(0.142);
    }

    return (
        <>
        <VStack>
            <HStack>
                <Text>Diameter of chirality (n, m) (</Text>
                <Input value={n} onChange={e => setN(e.target.value)} size='sm' width={16} textAlign='center'/>
                <Text>,</Text>
                <Input value={m} onChange={e => setM(e.target.value)} size='sm' width={16} textAlign='center'/>
                <Text>) nanotube is </Text>
                <Text fontWeight='bold'>{d.toFixed(2)}</Text>
                <Text>nm.</Text>

                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            More settings
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <HStack>
                                <Text>C-C bond: </Text>
                                <Input value={ccLength} onChange={e => setCcLength(e.target.value)} width={20} />
                                <Text>nm</Text>
                                <Button onClick={defaultParams}>Default</Button>
                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </HStack>
        </VStack>
        </>
    )
}

export default function Tools() {
    return (
        <>
        <VStack py='50'>
            <Diameter />
        </VStack>
        </>
    )
}