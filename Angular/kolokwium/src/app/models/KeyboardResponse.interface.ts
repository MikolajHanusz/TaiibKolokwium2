import { KeyboardType } from "./KeyboardType.interface";
export interface KeyboardResponseDTO {
    id: number;
    model: string;
    type: KeyboardType;
}