import { InlineConfig } from 'vite';
import { VarletConfig } from './varlet.config';
export declare function getDevConfig(varletConfig: Required<VarletConfig>): InlineConfig;
export declare function getBuildConfig(varletConfig: Required<VarletConfig>): InlineConfig;
export declare function getESMBundleConfig(varletConfig: Required<VarletConfig>): InlineConfig;
export declare function getUMDConfig(varletConfig: Required<VarletConfig>): InlineConfig;
