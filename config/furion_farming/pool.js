import {
    getMockUSDABI,
    getFarmingPoolUpgradeableABI,
    getAddress
} from "@/local/utils/common/contractABI";

import { getContract, fromWei } from "@/local/utils/common";
import { getLatestSummary } from "@/api/furion_swap";
import { getTokenPrice } from "@/api/furion_farming";

const SECONDS_PER_DAY = 24 * 60 * 60;
const token_images = {
    'FUR':  require('@/assets/images/liquidity/tokens/FUR.png'),
    'ETH':  require('@/assets/images/liquidity/tokens/ETH.png'),
    'USDT': require('@/assets/images/liquidity/tokens/USDT.png')
}

/**
 * Get Lp_Token_Address by token0 and token1 symbol
 * For example, all pools with FUR as token0 can be fetched as an object with token1 as
 * a key. So, FUR/ETC is mapped as 'FUR': {'ETH': lp_token_address, 'X': lp_token_address} */

const lp_token_addresses = {
    'FUR': {
        'ETH':  '0x7a01B3fDDA5046B66B3DBc561Ab33bA23017Fe70',
        'USDT': '0x3dFDc7821edCc79c92890E5404687D1B1C96D494',
        'FUR':   '0xb443675fc068fB3172D0Ad732a2Be60dCDf14177',
    },
    'ETH': {
        'FUR':  '0x0000000000000000000000000000000000000000',
        'USDT': '0x000000000000000000000000000000000000000'
    },
    'USDT': {
        'FUR':  '0x0000000000000000000000000000000000000000',
        'ETH':  '0x0000000000000000000000000000000000000000',
    },
}

/*
A pool

{   
            pool_name:              'FUR/ETH',
            token_0:                'FUR',
            token_1:                'ETH',
            token_0_image:          token_images['FUR'],
            token_1_image:          token_images['ETH'],

            lp_token:               'FSL',
            lp_token_address:       '0x000000000000000000000000000000000000',
            lp_token_contract:      {},
            lp_token_decimal:       '18',
            lp_token_price:         0.0,
            lp_token_value:         '0.000',

            reward_token:           'FUR',
            reward_token_decimal:   '18',

            farming_address:        '0xf4E1Ab751e8f7687Fe65b6e33eEcAd7c0bA8C808',
            farming_contract:       {},

            pool_Id:                0,

            user_balance:           '0.000',
            user_stake:             '0.000',
            user_reward:            '0.000',

            allowance_liquidity:    0,
            liquidity_approved:     false,

            amt:                    undefined,
            percent:                0,
            type:                   '1',
            index:                  0,

            tvl:                    '0.000',
            apr:                    '0.000',
            reward_per_day:         '0.000',

            initialized:            false,

        },
*/


export const InitialPoolList = [

        {   
            pool_name:              'FUR/ETH',
            token_0:                'FUR',
            token_1:                'ETH',
            token_0_image:          token_images['FUR'],
            token_1_image:          token_images['ETH'],

            lp_token:               'FSL',
            lp_token_address:       '0x000000000000000000000000000000000000',
            lp_token_contract:      {},
            lp_token_decimal:       '18',
            lp_token_price:         0.0,
            lp_token_value:         '0.000',

            reward_token:           'FUR',
            reward_token_decimal:   '18',

            farming_address:        '0x000000000000000000000000000000000000',
            farming_contract:       {},

            pool_Id:                0,

            user_balance:           '0.000',
            user_stake:             '0.000',
            user_reward:            '0.000',

            allowance_liquidity:    0,
            liquidity_approved:     false,

            amt:                    undefined,
            percent:                0,
            type:                   '1',
            index:                  0,

            tvl:                    '0.000',
            apr:                    '0.000',
            reward_per_day:         '0.000',

            initialized:            false,

        },

        {
            pool_name:              'FUR/USDT',
            token_0:                'FUR',
            token_1:                'USDT',
            token_0_image:          token_images['FUR'],
            token_1_image:          token_images['USDT'],

            lp_token:               'FSL',
            lp_token_address:       '0x000000000000000000000000000000000000',
            lp_token_contract:      {},
            lp_token_decimal:       '18',
            lp_token_price:         0.0,
            lp_token_value:         '0.000',

            reward_token:           'FUR',
            reward_token_decimal:   '18',

            farming_address:        '0x000000000000000000000000000000000000',
            farming_contract:       {},

            pool_Id:                0,

            user_balance:           '0.000',
            user_stake:             '0.000',
            user_reward:            '0.000',

            allowance_liquidity:    0,
            liquidity_approved:     false,

            amt:                    undefined,
            percent:                0,
            type:                   '1',
            index:                  0,

            tvl:                    '0.000',
            apr:                    '0.000',
            reward_per_day:         '0.000',

            initialized:            false,
        },

        {
            pool_name:              'FUR',
            token_0:                'FUR',
            token_1:                '',
            token_0_image:          token_images['FUR'],
            token_1_image:          '',

            lp_token:               'FSL',
            lp_token_address:       '0x000000000000000000000000000000000000',
            lp_token_contract:      {},
            lp_token_decimal:       '18',
            lp_token_price:         0.0,
            lp_token_value:         '0.000',

            reward_token:           'FUR',
            reward_token_decimal:   '18',

            farming_address:        '0x000000000000000000000000000000000000',
            farming_contract:       {},

            pool_Id:                0,

            user_balance:           '0.000',
            user_stake:             '0.000',
            user_reward:            '0.000',

            allowance_liquidity:    0,
            liquidity_approved:     false,

            amt:                    undefined,
            percent:                0,
            type:                   '1',
            index:                  0,

            tvl:                    '0.000',
            apr:                    '0.000',
            reward_per_day:         '0.000',

            initialized:            false,
        },

];


export const InitFarmingPool = async (pool, index, chainId) => {
    try {
        pool.index = index;
        if (pool.token_1 == '') {
            pool.lp_token_address = lp_token_addresses[pool.token_0][pool.token_0];
        } else {
            pool.lp_token_address = lp_token_addresses[pool.token_0][pool.token_1];
        }
        // get contract
        const lp_token_contract = await getContract(await getMockUSDABI(), pool.lp_token_address);
        // get decimals of lp token
        const lp_token_decimal = parseInt(await lp_token_contract.methods.decimals().call());

        // store contract and decimals in a pool for later use
        pool.lp_token_contract = lp_token_contract;
        pool.lp_token_decimal = lp_token_decimal.toString();

        //console.log('Lp token init');

        const addresses = await getAddress();
        pool.farming_address = addresses['FarmingPoolUpgradeable'];
        // get farming contract
        const farming_contract = await getContract(await getFarmingPoolUpgradeableABI(), pool.farming_address);
        pool.farming_contract = farming_contract;

        //console.log('farming contract init');

        const poolList = await farming_contract.methods.getPoolList().call();
        let Id = 1;
        for (; Id < poolList.length; Id ++) {
            if (poolList[Id].lpToken == pool.lp_token_address) {
                pool.pool_Id = Id;
                break;
            }
        }

        //console.log('Id init ', pool.pool_Id);
        // set up reward per day
        const single_pool = await farming_contract.methods.poolList(pool.pool_Id).call();
        const reward = fromWei(single_pool.basicFurionPerSecond, 18);
        pool.reward_per_day = (reward * SECONDS_PER_DAY);

        //console.log('rewards init');


        // initialize tvl and apr of a pool
        let summary = await getPoolSummary(pool, chainId);
        pool.tvl = summary['tvl'];
        pool.apr = summary['apr'];

        // calculate the price of liquidity token
        const lp_total =    fromWei(
                            await lp_token_contract.methods.totalSupply().call(), 
                            lp_token_decimal)
    
        pool.lp_token_price = (parseFloat(summary['tvl']) / parseFloat(lp_total));

        //console.log('Init finished');
        return pool;

    } catch(e) {
        //console.log('[Init Farming Pool] Error initializing the pool');
        console.warn(e);
        return;
    }
}

// function returns pool summary in terms of its tvl and apr
export const getPoolSummary = async (pool, chainId) => {
    let summary = {
        'tvl': '',
        'apr': '',
    }

    try {
        let network = '';
        if (chainId == 4) {
            network = 'rinkeby';
        } else if (chainId == 1) {
            network = 'mainnet';
        }

        const lp_token_decimal = parseInt(pool.lp_token_decimal);
        const lp_token_contract = pool.lp_token_contract;

        const lp_added = fromWei(
                            await lp_token_contract.methods.balanceOf(pool.farming_address).call(), 
                            lp_token_decimal);

        const lp_total = fromWei(
                            await lp_token_contract.methods.totalSupply().call(), 
                            lp_token_decimal);

        if (pool.token_1 == '') {
            const token_0_price = await getPrice(pool.token_0, network);
            summary['tvl'] = lp_added * token_0_price;
            const fur_price = await getPrice('FUR', network);
            pool.fur_price = fur_price;
            summary['apr'] = (parseFloat(pool.reward_per_day) * fur_price) / (365 * summary['tvl']);
        } else {
            const price_result = await getLatestSummary(pool.token_0, pool.token_1, network);
            let data = price_result['data'];
            const tvl = parseFloat(data['tvl']) * (parseFloat(lp_added) / parseFloat(lp_total));
            summary['tvl'] = tvl;

            const fur_price = await getPrice ('FUR', network);
            const apr = (parseFloat(pool.reward_per_day) * parseFloat(fur_price)) / (365 * tvl);
            summary['apr'] = apr;
        }
        summary['tvl'] = parseFloat(summary['tvl']).toFixed(6);
        summary['apr'] = parseFloat(summary['apr']).toFixed(6);


    } catch(e) {
        console.warn(e);
        summary['tvl'] = '0.000';
        summary['apr'] = '0.000';
    }

    return summary;
}

// returns a price of the specified token
const getPrice = async(token, network) => {
    let token_data = await getTokenPrice(token, network);
    return token_data['data']['data'];
}