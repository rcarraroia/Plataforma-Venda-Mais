<template lang="html">
    <div class="table-responsive">
        <table class="table ps-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Payment</th>
                    <th>Fullfillment</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#A580</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Unero Black Military</strong>
                        </a>
                    </td>
                    <td>
                        <span class="ps-badge success">Paid</span>
                    </td>
                    <td>
                        <span class="ps-fullfillment success">
                            delivered
                        </span>
                    </td>
                    <td>
                        <strong>$56.00</strong>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-ellipsis"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#B260</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Marsh Speaker</strong>
                        </a>
                    </td>
                    <td>
                        <span class="ps-badge gray">Unpaid</span>
                    </td>
                    <td>
                        <span class="ps-fullfillment success">
                            delivered
                        </span>
                    </td>
                    <td>
                        <strong>$56.00</strong>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-ellipsis"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A583</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Lined Blend T-Shirt</strong>
                        </a>
                    </td>
                    <td>
                        <span class="ps-badge success">Paid</span>
                    </td>
                    <td>
                        <span class="ps-fullfillment warning">
                            In Progress
                        </span>
                    </td>
                    <td>
                        <strong>$516.00</strong>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-ellipsis"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A583</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>DJI MAcvic Quadcopter</strong>
                        </a>
                    </td>
                    <td>
                        <span class="ps-badge gray">Unpaid</span>
                    </td>
                    <td>
                        <span class="ps-fullfillment success">
                            delivered
                        </span>
                    </td>
                    <td>
                        <strong>$112.00</strong>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-ellipsis"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>#A112</td>
                    <td>
                        <strong> Aug, 15, 2020</strong>
                    </td>
                    <td>
                        <a href="order-detail.html">
                            <strong>Black T-Shirt</strong>
                        </a>
                    </td>
                    <td>
                        <span class="ps-badge success">Paid</span>
                    </td>
                    <td>
                        <span class="ps-fullfillment danger">Cancel</span>
                    </td>
                    <td>
                        <strong>$30.00</strong>
                    </td>
                    <td>
                        <div class="dropdown">
                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="icon-ellipsis"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                    Edit
                                </a>
                                <a class="dropdown-item" href="#">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableOrderSummary'
};
</script>

<style lang="scss" scoped></style>
