import { App } from './App';
import express from 'express';
import { AppRouter } from '../routes';

export class AppFactory {
  private constructor() { }
  static getInstance(): App {
    return new App(
      express(),
      new AppRouter(),
    );
  }
}
