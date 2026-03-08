<?php
/**
 * Google Places API Proxy
 * This file fetches reviews from Google Places API and returns them to the frontend
 * 
 * IMPORTANT: This proxy is needed because Google Places API has CORS restrictions
 * and cannot be called directly from the browser.
 */

// Allow CORS for your domain
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

// Your Google API Key - Keep this secure on the server!
$apiKey = 'AIzaSyBKfWzh547HwfafiFBrGnO6KZg2yYPE9lQ';

// Get Place ID from query parameter or use default
$placeId = isset($_GET['placeId']) ? $_GET['placeId'] : 'ChIJ8aYiUWO7fRcR5dId3sPy6-E';

// Validate Place ID format (basic validation)
if (!preg_match('/^[A-Za-z0-9_-]+$/', $placeId)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid Place ID format']);
    exit;
}

// Build the Google Places API URL
$url = "https://maps.googleapis.com/maps/api/place/details/json?" . http_build_query([
    'place_id' => $placeId,
    'fields' => 'reviews,rating,user_ratings_total,name',
    'key' => $apiKey,
    'language' => 'en'
]);

// Initialize cURL
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_HTTPHEADER => ['Accept: application/json']
]);

// Execute request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// Handle errors
if ($error) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch reviews: ' . $error]);
    exit;
}

if ($httpCode !== 200) {
    http_response_code($httpCode);
    echo json_encode(['error' => 'Google API returned error', 'code' => $httpCode]);
    exit;
}

// Return the response
echo $response;
?>
