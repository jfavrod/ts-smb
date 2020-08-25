/**
 * @packageDocumentation
 * @module Services.SMBClient
 */

export interface ISMBClientConfig {
    domain: string;
    password: string;
    share: string;
    username: string;
}

export interface ISMB2Client {
    close(): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    exists(path: string, callback: (err: Error | undefined, exists: boolean) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mkdir(path: string, callback: (err: Error | undefined) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readdir(path: string, callback: (err: Error | undefined, files: string[]) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readFile(path: string, callback: (err: Error | undefined, data: Buffer) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rename(path: string, newPath: string, callback: (err: Error | undefined) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rmdir(path: string, callback: (err: Error | undefined) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unlink(path: string, callback: (err: Error | undefined) => any): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeFile(path: string, data: string | Buffer, callback: (err: Error | undefined) => any): void;
}

export interface ISMBClient {
    exists(path: string): Promise<boolean>;
    mkdir(path: string): Promise<void>;
    readdir(path: string): Promise<string[]>;
    readFile(path: string): Promise<Buffer>;
    rename(path: string, newPath: string): Promise<void>;
    rmdir(path: string): Promise<void>;
    unlink(path: string): Promise<void>;
    writeFile(path: string, data: string | Buffer): Promise<void>;
}
