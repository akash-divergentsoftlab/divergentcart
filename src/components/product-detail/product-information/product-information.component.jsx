import React from 'react';
import './product-information.styles.scss';

function ProductInformation() {
    return (
        <div className='product-information'>
            <h4>Product Information</h4>
            <table class="table table-bordered">
                <tbody>
                    <tr class="techSpecRow">
                        <th colspan="2">Product Details</th>
                    </tr>
                    <tr class="techSpecRow">
                        <td class="techSpecTD1">Brand: </td>
                        <td class="techSpecTD2">Fujifilm</td>
                    </tr>
                    <tr class="techSpecRow">
                        <td class="techSpecTD1">Model:</td>
                        <td class="techSpecTD2">FinePix S2950HD</td>
                    </tr>
                    <tr class="techSpecRow">
                        <td class="techSpecTD1">Released on:</td>
                        <td class="techSpecTD2"> 2011-01-28</td>
                    </tr>
                    <tr class="techSpecRow">
                        <td class="techSpecTD1">Dimensions:</td>
                        <td class="techSpecTD2"> 5.50" h x 5.50" w x 2.00" l, .75 pounds</td>
                    </tr>
                    <tr class="techSpecRow">
                        <td class="techSpecTD1">Display size:</td>
                        <td class="techSpecTD2">3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ProductInformation;