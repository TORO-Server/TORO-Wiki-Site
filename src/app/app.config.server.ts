import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { CONTENT_READER } from './core/content';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    // プリレンダーはワークスペースのルートで動くので、生成済みの public/content を直接読む
    {
      provide: CONTENT_READER,
      useValue: async (path: string) =>
        JSON.parse(await readFile(join(process.cwd(), 'public', 'content', path), 'utf8')),
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
