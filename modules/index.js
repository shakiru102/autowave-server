const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv');
const jwt = require('jsonwebtoken');
const qr = require('qrcode')
const vonage = require('@vonage/server-sdk')
const twilio = require('twilio')


module.exports = {
    express,
    bcrypt,
    mongoose,
    cors,
    env,
    jwt,
    qr,
    vonage,
    twilio,
}