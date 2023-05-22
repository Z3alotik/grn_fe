import { Injectable } from "@angular/core";
import { Address } from "../types/address-type";
import { Time } from "@angular/common";

@Injectable()
export class EventService {

    title: string = "";
    address: Address = {
        houseNumber: "",
        zip: "",
        street: "",
        city: ""
      };
    startDate: Date | undefined;
    endDate: Date | undefined;
    startTime: Time | undefined;
    endTime: Time | undefined;
    capacity: number = 0;
    entryPrice: number = 0;
    description: string = "";

    constructor(
        

        ) {}

        create() {}
}