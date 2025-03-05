import { OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
export declare class TestConsumer implements OnModuleInit {
    private readonly consumerSercive;
    constructor(consumerSercive: ConsumerService);
    onModuleInit(): Promise<void>;
}
