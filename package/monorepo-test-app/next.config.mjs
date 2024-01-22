/** @type {import('next').NextConfig} */
import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin';

const nextConfig = {
    transpilePackages: ['@monorepo/cui']
};

export default createVanillaExtractPlugin(nextConfig)