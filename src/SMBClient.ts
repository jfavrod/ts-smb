import SMB2 from 'smb2';
import { ISMBClient, ISMBClientConfig } from '.';
import { ISMB2Client } from './interfaces';

export default class SMBClient implements ISMBClient {
    public readonly className = this.constructor.name;
    private config: ISMBClientConfig;

    constructor(config: ISMBClientConfig) {
        this.config = config;

        this.readdir = this.readdir.bind(this);
        this.readFile = this.readFile.bind(this);
    }

    public async exists(path: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.client.exists(path, (err, doesExist) => {
                if (err) { reject(err); }
                else { resolve(doesExist); }
                this.client.close();
            });
        });
    }

    public async mkdir(path: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.mkdir(path, (err) => {
                if (err) { reject(err); }
                else { resolve(); }
                this.client.close();
            });
        });
    }

    public async readdir(path: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            this.client.readdir(path, (err, files) => {
                if (err) { reject(err); }
                else { resolve(files); }
                this.client.close();
            });
        });
    }

    public async readFile(path: string): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            this.client.readFile(path, (err, data) => {
                if (err) { reject(err); }
                else { resolve(data); }
                this.client.close();
            });
        });
    }

    public async rename(path: string, newPath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.rename(path, newPath, (err) => {
                if (err) { reject(err); }
                else { resolve(); }
                this.client.close();
            });
        });
    }

    public async rmdir(path: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.rmdir(path, (err) => {
                if (err) { reject(err); }
                else { resolve(); }
                this.client.close();
            });
        });
    }

    public async unlink(path: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.unlink(path, (err) => {
                if (err) { reject(err); }
                else { resolve(); }
                this.client.close();
            });
        });
    }

    public async writeFile(path: string, data: string | Buffer): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.writeFile(path, data, (err) => {
                if (err) { reject(err); }
                else { resolve(); }
                this.client.close();
            });
        });
    }

    private get client(): ISMB2Client {
        return new SMB2(this.config);
    }
}
