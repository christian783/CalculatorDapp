import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ethers } from 'ethers';
import { animate, style, transition, trigger } from '@angular/animations';
import CalculatorABI from './calculator-abi.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('0.5s ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('resultPop', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  num1: string = '';
  num2: string = '';
  result: string | null = null;
  error: string = '';

  private readonly CONTRACT_ADDRESS = '0xD15B8242044aA9b0822d0D3beD1aB73deAe427f1'; // Replace with your address
  private readonly PROVIDER_URL = 'http://127.0.0.1:7545'; // Ganache URL

  private async getContract(): Promise<ethers.Contract> {
    const provider = new ethers.JsonRpcProvider(this.PROVIDER_URL);
    return new ethers.Contract(this.CONTRACT_ADDRESS, CalculatorABI, provider);
  }

  async calculate(operation: string): Promise<void> {
    if (!this.num1 || !this.num2) {
      this.error = 'Enter both numbers, dude!';
      this.result = null;
      return;
    }
    this.error = '';
    this.result = null;

    try {
      const contract = await this.getContract();
      const a = BigInt(this.num1);
      const b = BigInt(this.num2);

      let res: BigInt;
      switch (operation) {
        case 'add':
          res = await contract['add'](a, b);
          break;
        case 'subtract':
          res = await contract['subtract'](a, b);
          break;
        case 'multiply':
          res = await contract['multiply'](a, b);
          break;
        case 'divide':
          res = await contract['divide'](a, b);
          break;
        default:
          return;
      }
      this.result = res.toString();
    } catch (err: any) {
      this.error = err.reason || 'Oops, something broke!';
      console.error(err);
    }
  }
}