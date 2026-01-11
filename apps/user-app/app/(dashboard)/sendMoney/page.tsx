"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import p2pTransfer from "../../lib/actions/p2ptransaction";

export default function () {
    const [amount, setAmount] = useState(0);
    const [number, setNumber] = useState("");

    return (
        <div className="w-full">
            <Center>
                <Card title="Send Money">
                    <TextInput label={"Number"} placeholder="Number" onChange={(value) => setNumber(value)} />
                    <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => setAmount(Number(value))} />

                    <div className="flex justify-center pt-4">
                        <Button onClick={async () => await p2pTransfer(number, Number(amount) * 100)}>Send Money</Button>
                    </div>
                </Card>
            </Center>
        </div>
    );
}
