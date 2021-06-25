import React from "react";

function AdminDashboard() {
    return (
        <>
            <header>
                <nav id="sidenav-1" class="sidenav" data-mdb-hidden="false" data-mdb-accordion="true">
                    <a class="ripple d-flex justify-content-center py-4" href="#!" data-mdb-ripple-color="primary">
                        <img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                            alt="MDB Logo" draggable="false" />
                    </a>
                    <ul class="sidenav-menu">
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-chart-area fa-fw me-3"></i
                                ><span>Webiste traffic</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link"
                            ><i class="fas fa-cogs fa-fw me-3"></i><span>Settings</span></a
                            >
                            <ul class="sidenav-collapse">
                                <li class="sidenav-item">
                                    <a class="sidenav-link">Profile</a>
                                </li>
                                <li class="sidenav-item">
                                    <a class="sidenav-link">Account</a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link"
                            ><i class="fas fa-lock fa-fw me-3"></i><span>Password</span></a
                            >
                            <ul class="sidenav-collapse">
                                <li class="sidenav-item">
                                    <a class="sidenav-link">Request password</a>
                                </li>
                                <li class="sidenav-item">
                                    <a class="sidenav-link">Reset password</a>
                                </li>
                            </ul>
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-chart-line fa-fw me-3"></i
                                ><span>Analytics</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-chart-pie fa-fw me-3"></i
                                ><span>SEO</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-chart-bar fa-fw me-3"></i
                                ><span>Orders</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-globe fa-fw me-3"></i
                                ><span>International</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-building fa-fw me-3"></i
                                ><span>Partners</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-calendar fa-fw me-3"></i
                                ><span>Calendar</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-users fa-fw me-3"></i
                                ><span>Users</span></a
                            >
                        </li>
                        <li class="sidenav-item">
                            <a class="sidenav-link" href="">
                                <i class="fas fa-money-bill fa-fw me-3"></i
                                ><span>Sales</span></a
                            >
                        </li>
                    </ul>
                </nav>
                <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div class="container-fluid">
                        <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn shadow-0 p-0 me-3 d-block d-xxl-none"
                            aria-controls="#sidenav-1" aria-haspopup="true">
                            <i class="fas fa-bars fa-lg"></i>
                        </button>
                        <form class="d-none d-md-flex input-group w-auto my-auto">
                            <input autocomplete="off" type="search" class="form-control rounded"
                                placeholder='Search (ctrl + "/" to focus)' style="min-width: 225px" />
                            <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
                        </form>
                        <ul class="navbar-nav ms-auto d-flex flex-row">
                            <li class="nav-item dropdown">
                                <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                                    role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-bell"></i>
                                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Some news</a></li>
                                    <li><a class="dropdown-item" href="#">Another news</a></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-3 me-lg-0" href="#">
                                    <i class="fas fa-fill-drip"></i>
                                </a>
                            </li>
                            <li class="nav-item me-3 me-lg-0">
                                <a class="nav-link" href="#">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
                                    data-mdb-toggle="dropdown" aria-expanded="false">
                                    <i class="united kingdom flag m-0"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="united kingdom flag"></i>English
                                            <i class="fa fa-check text-success ms-2"></i></a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="poland flag"></i>Polski</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="china flag"></i>中文</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="japan flag"></i>日本語</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="germany flag"></i>Deutsch</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="france flag"></i>Français</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="spain flag"></i>Español</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="russia flag"></i>Русский</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"><i class="portugal flag"></i>Português</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                                    id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" class="rounded-circle" height="22"
                                        alt="" loading="lazy" />
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">My profile</a></li>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main style="margin-top: 58px">
                <div class="container">
                    <h1 class="h3 text-center py-5 mb-0">SEO dashboard</h1>
                    <section>
                        <div class="row">
                            <div class="col-lg-6 mb-4 mb-lg-0">
                                <div class="row">
                                    <div class="col-lg-6 mb-4">
                                        <div class="card text-center">
                                            <div class="card-header bg-light border-0">
                                                <strong>Indexed Pages on Google</strong>
                                            </div>
                                            <div class="card-body">
                                                <p class="mb-2">Unique pages</p>
                                                <h5>34</h5>
                                                <hr />
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <p class="mb-2"><small>Percentage change</small></p>
                                                        <p class="mb-2 text-success">
                                                            <i class="fas fa-caret-up me-1"></i><span>3.0%</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p class="mb-2"><small>Absolute change</small></p>
                                                        <p class="mb-2 text-success">
                                                            <i class="fas fa-caret-up me-1"></i><span>1</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                        <div class="card text-center">
                                            <div class="card-header bg-light border-0">
                                                <strong>Indexed Queries on Google</strong>
                                            </div>
                                            <div class="card-body">
                                                <p class="mb-2">Unique Keywords</p>
                                                <h5>860</h5>
                                                <hr />
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <p class="mb-2"><small>Percentage change</small></p>
                                                        <p class="mb-2 text-danger">
                                                            <i class="fas fa-caret-down me-1"></i><span>-12.7%</span>
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p class="mb-2"><small>Absolute change</small></p>
                                                        <p class="mb-2 text-danger">
                                                            <i class="fas fa-caret-down me-1"></i><span>-125</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 mb-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <div id="chart-devices-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div id="chart-devices-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div id="chart-pages-and-queries" style="height: 390px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="mb-4">
                        <div class="card">
                            <div class="card-header text-center py-3 bg-light border-0">
                                <strong>Google Organic Search KPIs</strong>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Impressions</th>
                                                <th scope="col">Clicks</th>
                                                <th scope="col">Site CTR</th>
                                                <th scope="col">Average Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Value</th>
                                                <td>17,842</td>
                                                <td>168</td>
                                                <td>0.94%</td>
                                                <td>48.5</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Percentage change</th>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>17.7%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-danger">
                                                        <i class="fas fa-caret-down me-1"></i><span>-38.2%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>25.0%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>10.3%</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Absolute change</th>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>3,825</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-danger">
                                                        <i class="fas fa-caret-down me-1"></i><span>-104</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>0.31%</span>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span class="text-success">
                                                        <i class="fas fa-caret-up me-1"></i><span>4.52</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-4" id="chart-impressions-and-clicks" style="height: 300px"></div>

                                <div class="table-responsive">
                                    <table class="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="col">Week</th>
                                                <th scope="col">Impressions</th>
                                                <th scope="col">Clicks</th>
                                                <th scope="col">Site CTR</th>
                                                <th scope="col">Average position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">31.08.2020 - 6.02.2020</th>
                                                <td>1586</td>
                                                <td>17</td>
                                                <td>1.07%</td>
                                                <td>48.98</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">24.08.2020 - 30.08.2020</th>
                                                <td>4,693</td>
                                                <td>56</td>
                                                <td>1.19%</td>
                                                <td>49.15</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">17.08.2020 - 23.08.2020</th>
                                                <td>4,613</td>
                                                <td>44</td>
                                                <td>0.95%</td>
                                                <td>49.34</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">10.08.2020 - 16.08.2020</th>
                                                <td>4,911</td>
                                                <td>48</td>
                                                <td>0.98%</td>
                                                <td>47.95</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer class="mt-5"></footer>
        </>
    );
}
export default AdminDashboard;