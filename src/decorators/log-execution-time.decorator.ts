import { Logger } from '@nestjs/common';

export function LogExecutionTime(): MethodDecorator {
  return function (
    target: any,
    propertyKey: string, //this line is the signature for method decorator
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const startTime = new Date().toLocaleTimeString();
      const result = await originalMethod.apply(this, args);
      const endTime = new Date().toLocaleTimeString();
      console.log(
        `Method ${propertyKey} start time is: ${startTime} and end time is: ${endTime}, name of the service is ${target.constructor.name}`,
      );
      //   console.log('Result: ', result);
      return result;
    };
    // console.log('target: ', target);
    // console.log('originalMethod(value): ', originalMethod);
    // console.log('originalMethod(writable): ', descriptor.writable);
    // console.log('originalMethod(enumerable): ', descriptor.enumerable); //Whether the property shows up during enumeration (e.g., in for...in loops).
    // console.log('descriptor: ', descriptor);
    return descriptor;
  };
}

export function LogClassExecutionTime(): ClassDecorator {
  return function (target: any) {
    const service = target;

    const startTime = new Date().toLocaleTimeString();
    service.prototype.onModuleInit = function () {
      Logger.log(`${service.name} class initialized at: ${startTime}`);
    };

    const endTime = new Date().toLocaleTimeString();
    service.prototype.onModuleDestroy = function () {
      Logger.log(`${service.name} class destroyed at: ${endTime}`);
    };

    return service;
  };
}
